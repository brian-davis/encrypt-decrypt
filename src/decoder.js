var decoder = {
  // promptPassword: function() {
  //   document.getElementById("modal-wrapper").style.visibility="visible";
  // },
  // getPassword: function() {
  //   this.password = document.getElementById("password-field").value;
  //   document.getElementById("modal-wrapper").style.visibility="hidden";
  //   this.getCypherText();
  // },
  // getCypherText: function() {
  //   this.cypherText = window.location.search.substr(1);//split('?')[1]
  //   this.performDecryption();
  // },
  getPassword : function() { decoder.password = "password"; },//test
  getCypherText : function() { decoder.cypherText = CryptoJS.AES.encrypt("a test string", "password");},//test
  performDecryption: function() {
    this.decryptedMessage = "The message is: \n" + CryptoJS.AES.decrypt(decoder.cypherText, decoder.password).toString(CryptoJS.enc.Utf8) + ".";
    return this.decryptedMessage;
    this.displayMessage();
  },
  displayMessage: function() {
    document.getElementById("message").value = this.decryptedMessage;
  }
};


window.onload = function() {
  // decoder.promptPassword();
  decoder.getPassword();
  decoder.getCypherText();
};
