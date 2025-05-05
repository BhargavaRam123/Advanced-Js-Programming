function dowork()
{
    try {
        dofailsomeway()
    } catch (error) {
        throw new Error("Failed in some way",{cause:error})
    }
    try {
        doFailanotherway()
    } catch (error) {
        throw new Error("Failed in another way",{cause:error})
    }
}

try {
    dowork()
} catch (error) {
    switch(error.message)
    {
        case "Failed in some way":
            console.log("logging the cause",error.cause);
            break;
        case "Failed in another way":
            console.log("logging the cause",error.cause)
            break;
    }
}