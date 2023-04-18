import ButtonProps from "./Button.interface";

export const Button = ({postPerPage,totalPost,setCurrentPage}:ButtonProps) => {

  let buttons = []

  for(let i = 1; i<=Math.ceil(totalPost / postPerPage); i++){
    buttons.push(i)
  }



  return (
    <div className="flex">
      { buttons.map((id,index) => {
        return(
          <div key={id} className="mr-6 p-2">
            <button onClick={() => setCurrentPage(index)}>{ index }</button>
          </div>
        )
      })}
    </div>
  )
}
