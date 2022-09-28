import './App.css';
import React from 'react';

function App (){
  let newliczba1 = document.form.liczba1.value;
  let newliczba2 = document.form.liczba2.value;
  let newselect = document.form.select.value;
  let newwypisz = document.form.wypisz.value;

  onSubmitEvent=()=>{
    switch(newselect){
      case(1):{
        document.write(newwypisz(newliczba1 + newliczba2));
      };break;
      case(2):{
        document.wrire(newwypisz(newliczba1 - newliczba2));
      };break;
      case(3):{
        document.wrire(newwypisz(newliczba1 * newliczba2));
      };break;
      case(4):{
        document.wrire(newwypisz(newliczba1 / newliczba2));
      };break;
      case(5):{
        document.wrire(newwypisz(newliczba1 ** newliczba2));
      };break;
      case(6):{
        document.wrire(newwypisz(newliczba1 % newliczba2));
      };break;
    }
  }
    return(
      <div>
      <form name="form" value="form" onSubmit={this.onSubmitEvent}>
      <input type="text" name="liczba1"/>
      <input type="text" name="liczba2"/><br/><br/>
      <select name="select">
        <option value="1">+</option>
        <option value="2">-</option>
        <option value="3">*</option>
        <option value="4">/</option>
        <option value="5">**</option>
        <option value="6">%</option>
      </select><br/><br/>
      <button type="submit">Oblicz</button>
      <p name="wypisz"></p>
      </form>
      </div>
    );
  };

export default App;
