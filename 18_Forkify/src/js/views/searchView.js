class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    return this._parentElement.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        handler();
        this._clearInput();
      }.bind(this)
    );
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
