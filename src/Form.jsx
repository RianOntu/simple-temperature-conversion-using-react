import React from 'react'

class Form extends React.Component {

  state={
  title:'JavaScript',
  text:'javascript is awesome',
  library:'React',
  isAwesome:true
  
 
  }

  handleChange=(e)=>{
   if(e.target.type==='text'){
    this.setState({
      title:e.target.value
  })
   }else if(e.target.type==='textarea'){
    this.setState({
      text:e.target.value
  })
   }else if(e.target.type==='select-one'){
    this.setState({
      library:e.target.value
  })

   }else if(e.target.type==='checkbox'){
    this.setState({
      isAwesome:e.target.checked
  })
  
   }
  }
  handleSubmit=e=>{
    const {title,text,library,isAwesome}=this.state;
    e.preventDefault();
    console.log(title+"--"+text+'--'+library+"--"+isAwesome)

  }
 
  render(){
    const {title,text,isAwesome,library}=this.state;
    return (
      <>
   <form onSubmit={this.handleSubmit}>
   <input type="text" value={title} onChange={this.handleChange} />
    <br /><br />
    <textarea type="textarea" value={text} onChange={this.handleChange}></textarea>
    <br /><br />
    <select value={library} onChange={this.handleChange}>
      <option value="React">React</option>
      <option value="Angular">Angular</option>
    </select>
    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
    <br /><br />
    <input type="submit" value="Submit" />
   </form>
      </>
    )
  }

 
}

export default Form