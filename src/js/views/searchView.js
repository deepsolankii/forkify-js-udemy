class SearchView {
  _parentElemnent = document.querySelector('.search');
  getQuery() {
    const query = this._parentElemnent.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElemnent.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentElemnent.addEventListener('submit', function (e) {
      e.preventDefault();
      //   console.log(this.getQuery);
      handler();
    });
  }
}
export default new SearchView();
