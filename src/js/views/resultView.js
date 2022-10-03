import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './view.js';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Could not find your query, Please try again.';
  _message = '';
  _generateMarkUp() {
    // console.log(this._data);

    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultView();
