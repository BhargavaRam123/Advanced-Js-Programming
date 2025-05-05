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

    let jsondata = `{"name":"d"}`

    try {
        readUser(jsondata)
    } catch (error) {
        console.log(error);
    }