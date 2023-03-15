const TextField = ({lable, id, ...otherProps}) => {
   return (
      <>
         <label htmlFor={id}>{lable}</label>
         <input id={id} {...otherProps} />
      </>
   )
}

export default TextField