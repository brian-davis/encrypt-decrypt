  var decoder = {
      promptPassword: function() {
        document.getElementById("modal-wrapper").style.visibility="visible";
      },
      getPassword: function() {
        this.password = document.getElementById("password-field").value;
        document.getElementById("modal-wrapper").style.visibility="hidden";
        this.getHashFromUrl();
      },
      getHashFromUrl: function() {
        this.hashFromUrl = window.location.search.substr(1);//split('?')[1]
        this.performDecryption();
      },
      performDecryption: function() {
        this.decryptedMessage = "The message is: \n" + CryptoJS.AES.decrypt(this.hashFromUrl, this.password).toString(CryptoJS.enc.Utf8) + ".";
        this.displayMessage();
      },
      displayMessage: function() {
        document.getElementById("message").value = this.decryptedMessage;
      }
    };
    window.onload = decoder.promptPassword();
