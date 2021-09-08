import _ from 'lodash'
import { searchWiki } from '../algolia-search/search-wiki'
import { sendMB } from '../../infrastructure/event-tracking'

function formatHit(hit) {
  const pageUnderscored = hit.pageName.replace(/\s/g, '_')
  const pageSlug = encodeURIComponent(pageUnderscored)
  const pagePath = hit.kb ? 'how-to' : 'latex'

  let pageAnchor = ''
  let pageName = hit._highlightResult.pageName.value
  if (hit.sectionName) {
    pageAnchor = `#${hit.sectionName.replace(/\s/g, '_')}`
    pageName += ' - ' + hit.sectionName
  }

  const url = `/learn/${pagePath}/${pageSlug}${pageAnchor}`
  return { url, pageName }
}

export function setupSearch(formEl) {
  const inputEl = formEl.querySelector('[name="subject"]')
  const resultsEl = formEl.querySelector('[data-ol-search-results]')
  const wrapperEl = formEl.querySelector('[data-ol-search-results-wrapper]')

  let lastValue = ''
  function hideResults() {
    wrapperEl.setAttribute('hidden', '')
  }
  function showResults() {
    wrapperEl.removeAttribute('hidden')
  }

  async function handleChange() {
    const value = inputEl.value
    if (value === lastValue) return
    lastValue = value
    if (value.length < 3) {
      hideResults()
      return
    }

    try {
      const { hits, nbHits } = await searchWiki(value, {
        hitsPerPage: 3,
        typoTolerance: 'strict',
      })
      resultsEl.innerText = ''

      for (const hit of hits) {
        const { url, pageName } = formatHit(hit)
        const liEl = document.createElement('li')

        const linkEl = document.createElement('a')
        linkEl.className = 'contact-suggestion-list-item'
        linkEl.href = url
        linkEl.target = '_blank'
        liEl.append(linkEl)

        const contentEl = document.createElement('span')
        contentEl.innerHTML = pageName
        linkEl.append(contentEl)

        const iconEl = document.createElement('i')
        iconEl.className = 'fa fa-angle-right'
        iconEl.setAttribute('aria-hidden', 'true')
        linkEl.append(contentEl)

        resultsEl.append(liEl)
      }
      if (nbHits > 0) {
        showResults()
        sendMB('contact-form-suggestions-shown')
      } else {
        hideResults()
      }
    } catch (e) {
      hideResults()
    }
  }

  inputEl.addEventListener('input', _.debounce(handleChange, 350))

  // display initial results
  handleChange()
}
