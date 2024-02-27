

const RetornaTodosFuncionarios =() =>{
    let funcionario =[]
    fetch('https://localhost:7128/Funcionario')
    .then(resp=>resp.json())
    .then((data)=>{
        data.forEach(func => {
            funcionario.push(func)
        });
    })
    return funcionario

}
export default RetornaTodosFuncionarios