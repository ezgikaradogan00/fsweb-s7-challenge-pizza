describe("yönlendirme testi", function() {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    
  
    it("Anasayfada yer alan -ACIKTIM- butonu form sayfasına yönlendiriyor mu?", function() {
      cy.contains("ACIKTIM");
     
    });
    
  });

describe("Form hata testleri", function() {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    
  
    it("Hamur kalınlığı seçilmeyince  hata mesajı görünüyor mu?", function() {
      cy.get("[data-test=size-select]").select("Kalın");
     
    });
    
  });





describe("İnput hata testleri", function() {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    
  
    it("İnputa metin yazılabiliyor mu?", function() {
      cy.get('input[name="name-input"]').type("hey");
    });
    
  });




describe("Malzeme Seçimi hata testleri", function() {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    
  
    it("Birden fazla malzeme seçebiliyor mu?", function() {
      cy.get('input[type="checkbox"]').check(["Kanada Jambonu" ,"Pepperoni" ,"Sosis"]);
    });
    
  });

 