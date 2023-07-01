import React, { useState } from "react";

export default function AddUser({onAdd}) {
  const [form, setForm] = useState({ name: "", surename: "", salary: 70000 });
  const [eror, setEror] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.name || !form.surename || !form.salary){
      setEror("mutqagreq chisht tvyalnery")
    }else{
      onAdd(form);
      setEror("")
      setForm({ name: "", surename: "", salary: 70000})
    }
  }
  return (
    <div>
      <h3>User Add</h3>
      <p style={{color:"red" }}>{eror}</p>
      <form onSubmit={handleSubmit} action="">

        <div>
          <label></label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({...form, name:e.target.value})}
          />
        </div>

        <div>
          <label></label>
          <input type="text" 
          value={form.surename}
          onChange={(e) => setForm({...form, surename:e.target.value})}
          />
        </div>
        <div>
          <label></label>
          <input type="number"
          value={form.salary}
          onChange={(e) => setForm({...form, salary:e.target.value})}
          />
        </div>
        <button >Add</button>
        
      </form>

    </div>
  );
}
