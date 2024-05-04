function restrictNumber(e) {
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
  }
  
  var userName = document.querySelector('#numberField');
  userName.addEventListener('input', restrictNumber);