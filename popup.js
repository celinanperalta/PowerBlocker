function toggleRedirect() {

           chrome.tabs.executeScript({
    file: 'alert.js'
  }); 

}

    document.getElementById('toggle').addEventListener('click', toggleRedirect);