let goToBNK=(success,failure)=>{
    let acc_Bal=11000;
    acc_Bal>=70000?success("Go&Enjoy"):
                   failure("Go to PG")

}
goToBNK((msg)=>{console.log(msg)},
        (err)=>{console.log(err)}
    )
//goToBNK(()=>{},()=>{})