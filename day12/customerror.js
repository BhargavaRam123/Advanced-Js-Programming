    class validationerror extends Error{
        constructor(message)
        {
            super(message)
            this.name = "validation error"
        }
    }
     
    function test(){
        throw new validationerror("whoops!")
    }



    function readUser(jsondata)
    {
        const obj = JSON.parse(jsondata)
        if(!obj.name)
        {
            throw new validationerror("Name is required")
        }
    }

    let jsondata = `{"name":""}`

    try {
        readUser(jsondata)
    } catch (error) {
        if(error instanceof validationerror)
            console.log("validationerror->",error);
        if(error instanceof SyntaxError)
            console.log("syntaxerror->",error)
    }