describe("Decoder", function(){
  it("encodes a string to a URL", function() {
    //URL access and user interaction mockup
    encoder.setMessage();
    encoder.getPassword();
    expect(encoder.encrypt()).toEqual("Your encrypted message is available to anyone with the passphrase at: \n\n" + this.newLocation);
  });
});
