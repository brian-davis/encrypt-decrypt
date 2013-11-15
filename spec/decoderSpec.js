describe("Decoder", function(){
  it("decodes an encrypted string from the URL", function() {
    //URL access and user interaction mockup
    // decoder.getPassword = function() { decoder.password = "password"; };
    // decoder.getCypherText = function() { decoder.cypherText = CryptoJS.AES.encrypt("a test string", "password");};
    expect(decoder.performDecryption()).toEqual("The message is: \na test string.");
  });
});
