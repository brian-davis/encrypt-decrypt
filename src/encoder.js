var encoder = {
        getMessage: function() {
          this.message = document.getElementById("message").value;
        },
        promptPassword: function() {
          document.getElementById("modal-wrapper").style.visibility='visible';
          // this.password = prompt("Enter a password");
        },
        getPassword: function () {
          this.password = document.getElementById("password-field").value;
          document.getElementById("modal-wrapper").style.visibility='hidden';
          this.setUrl();
        },
        setUrl: function() {
          var currentLocation = window.location.href;//or document.URL
          this.newLocation = currentLocation.replace("index.html","") + "decoder.html?" + this.encrypt();
          this.replaceMessageWithUrl();
        },
        replaceMessageWithUrl: function () {
          document.getElementById("message").value = "Your encrypted message is available to anyone with the passphrase at: \n\n" + this.newLocation;
        },
        encrypt: function() {
          cypher = CryptoJS.AES.encrypt(this.message, this.password)
          return cypher
        },
        protect: function() {
          this.getMessage();
          this.promptPassword();
        }
      }
document.getElementById('encrypt').onclick = function(){encoder.promptPassword();};
document.getElementById('enter').onclick = function(){encoder.getPassword();};
