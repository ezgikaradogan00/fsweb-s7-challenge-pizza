import React, {Switch, useState, useEffect}  from 'react';
import {Link  } from 'react-router-dom';
import * as Yup from "yup";
import axios from "axios";
import  './Form.css';

const pizzaform = () => {


const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [size, setSize] = useState("");
const [adet, setAdet] = useState(1);






// Form Validation With Yup  -  Formschema kullanarak //
const formSchema = Yup.object().shape({
  name: Yup.string().required("isim alanı zorunludur.").min(2, "İsim en az 2 karakter olmalıdır."),
  phone:Yup.number().required("telefon numarası alanı zorunludur.").min(9, "adres en az 9 karakter olmalıdır."),
  adress:Yup.string().required("adres alanı zorunludur.").min(3, "adres en az 3 karakter olmalıdır."),
  
  
});

const [formData,setFormData] = useState({
  name:"",
  adress:"",
  phone:"",
  
  
});

const [formErrors,setFormErrors] = useState({
  name:"",
  adress:"",
  phone:"",
  
  
  
});

useEffect(() => {
  formSchema.isValid(FormData).then((valid) => {
      if(valid) console.log("form datası geçerli!")
      else console.warn("form datası hatalı!" )
  });
}, [FormData]);

// hata mesajları görüntüleme- stateler güncellenirken görüntülenir
useEffect(() => {
  console.warn("formErrors:", formErrors);
}, [formErrors]);


function checkFormErrors(name, value) {
  Yup.reach(formSchema, name) 
    .validate(value) 
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      }); 
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
  }

const handleNameChange = (e) => {
  setName(e.target.value);
};
const handleAddressChange = (e) => {
  setAddress(e.target.value);
};
const handlePhoneChange = (e) => {
  setPhone(e.target.value);
};
const handleSizeChange = (e) => {
  setSize(e.target.value);
};


return (
    <>
      <div className='link'>
           <nav>
            <ul>
                <li>
                    <Link to ="/"> Anasayfa </Link>
                </li>
                <li>
                    <Link to ="/secenekler"> Seçenekler </Link>
                </li>
                <li>
                    <Link to ="/pizza"> Sipariş Oluştur </Link>
                </li>
                
            </ul>
           </nav>
          </div>



       <div className= "contanier"> 
          
   
          
          
           <div className='text-contanier'>
            <h2>Position Absolute Acı Pizza</h2>
            <h3>85.50₺ </h3>
            <p>
                Frontend Dev olarak hala position:absolute kullanıyoran bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir...Küçük bir pizzaya bazen pizzetta denir.
            </p>
           </div>

        <form id= "pizza-form" >
            

         <label htmlFor="personal data">
          <label htmlFor="name-input">
            <b>
              Name <span className="required">*</span>
            </b>{" "}
          </label>
          <input
            type="text"
            id="name-input"
            name="name-input"
            value={name}
            onChange={handleNameChange}
            required
            minLength={2}
          />

          <br/>


          <label htmlFor="address-input">
            <b>
              Address <span className="required">*</span>
            </b>{" "}
          </label>
          <input
            type="text"
            id="address-input"
            name="address-input"
            value={address}
            onChange={handleAddressChange}
            required
            minLength={3}
            />

          <br/>


          <label htmlFor="phone-input">
            <b>
              Phone <span className="required">*</span>
            </b>{" "}
          </label>
          <input
            type="text"
            id="phone-input"
            name="phone-input"
            value={phone}
            onChange={handlePhoneChange}
            required
            minLength={9}
            />
          </label>
          <br />
          <br />

            <label htmlFor='size-dropdown'> <strong> Boyut Seç * </strong> </label>
             

              <div id='boyutsec-checkbox'>
                <label htmlFor='Checkbox1'>
                  <input 
                   id='Checkbox1'
                   type='checkbox'
                   
                   
                   
                  />

                 Küçük

                </label>

                <label htmlFor='Checkbox2'>
                  <input 
                   id='Checkbox2'
                   type='checkbox'

                   
                  />

                 Orta

                </label>

                <label htmlFor='Checkbox3'>
                  <input 
                   id='Checkbox3'
                   type='checkbox'
                   value= "Büyük"
                   
                  />

                 Büyük

                </label>
              </div>

               

            <br />
            <br />

            <label htmlFor='size-dropdown'>  Hamur Seç * 
            <br/>
              <select
                id = 'size-dropdown' 
                value = {size} 
                onChange ={handleSizeChange} 
                data-test= "size-select"
                required
               
               >
                <option place ="">-Hamur Kalınlığı-</option>
                <option value ="Ekstraİnce">Ekstra İnce</option>
                <option value ="İnce">İnce</option>
                <option value ="Orta">Orta</option>
                <option value ="Kalın">Kalın</option>


               </select>
              
            </label>




            <br />
            <br />

            <label htmlFor='checklist'> Ek Malzemeler </label>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className='checklist'>
              <label htmlFor='Pepperoni-Checkbox'>
                <input 
                 id='Pepperoni-Checkbox'
                 name='check'
                 type='checkbox'
                 value={" Pepperoni"}
                 
                 />
                
               Pepperoni

               </label>

              <label htmlFor='Sosis-Checkbox'>
                <input 
                 id='Sosis-Checkbox'
                 type='checkbox'
                 value={" Sosis"}
                 
                 />

               Sosis

               </label>

              <label htmlFor='Kanada Jambonu-Checkbox'>
                <input 
                 id='Kanada Jambonu-Checkbox'
                 type='checkbox'
                 value={"Kanada Jambonu"}
                />

               Kanada Jambonu

               </label>
                
               <label htmlFor='Tavuk Izgara-Checkbox'>
                <input 
                 id='Tavuk Izgara-Checkbox'
                 type='checkbox'
                 value={"Tavuk Izgara"}
                 />

               Tavuk Izgara

               </label>

               <label htmlFor='Soğan-Checkbox'>
                <input 
                 id='Soğan-Checkbox'
                 type='checkbox'
                 value={"Soğan"}
                 />

               Soğan

               </label>

               <label htmlFor='Domates-Checkbox'>
                <input 
                 id='Domates-Checkbox'
                 type='checkbox'
                 value={"Domates"}
                 />

               Domates

               </label>

               <label htmlFor='Mısır-Checkbox'>
                <input 
                 id='Mısır-Checkbox'
                 type='checkbox'
                 value={"Mısır"}
                 />

               Mısır

               </label>
               
               <label htmlFor='Sucuk-Checkbox'>
                <input 
                 id='Sucuk-Checkbox'
                 type='checkbox'
                 value={"Sucuk"}
                 />

               Sucuk

               </label>
               
               
               <label htmlFor='Jalepeno-Checkbox'>
                <input 
                 id='Jalepeno-Checkbox'
                 type='checkbox'
                 value={"Jalepeno"}
                 />

               Jalepeno

               </label>
               
               <label htmlFor='Sarımsak-Checkbox'>
                <input 
                 id='Sarımsak-Checkbox'
                 type='checkbox'
                 value={"Sarımsak"}
                 />

               Sarımsak

               </label>
               
               <label htmlFor='Biber-Checkbox'>
                <input 
                 id='Biber-Checkbox'
                 type='checkbox'
                 value={" Biber"}
                 />

               Biber

               </label>
               
               <label htmlFor='Ananas-Checkbox'>
                <input 
                 id='Ananas-Checkbox'
                 type='checkbox'
                 value={"Ananas"}
                 />

               Ananas

               </label>
               
               <label htmlFor='Kabak-Checkbox'>
                <input 
                 id='Kabak-Checkbox'
                 type='checkbox'
                 value={"Kabak"}
                />

               Kabak

               </label>
               

            </div>
              
            <br/> 
            <br/> 

              
              <label>
              <h3>Sipariş Notu </h3>
              <textarea
                
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                rows={5}
                cols={125}
              />


              </label>

              <hr />
              
            
          <div className="adet-ve-siparis">
            <div class="adet-bolumu">
              <button
                class="azalt-button"
                type="button"
                onClick={() => {
                  if (adet > 1) {
                    setAdet(adet - 1);
                  }
                }}
              >
                -
              </button>

              <div class="adet-kutusu">
                <span class="adet-sayisi">{adet}</span>
              </div>
              <button
                class="arttır-button"
                type="button"
                onClick={() => setAdet(adet + 1)}
              >
                +
              </button>
            </div>
          </div>


        <div class="siparislerim">
            
              <div>Sipariş Toplamı</div>

              <div className="secimler">
                {" "}
                <span>Seçimler:</span> 
                <span>25,00 ₺</span>

              </div>

              <div className="secimler" style={{ color: "red" }}>

                <span>Toplam:</span>  
                <span>110,50 ₺</span>

              </div>

              <div className='btn'>

                

                  <button id="order-button" type="submit"> SİPARİŞ VER </button>

                  
                
              
              </div>
            
              
          </div>

        </form>

       </div>

    </>
   
   )

};

export default pizzaform;