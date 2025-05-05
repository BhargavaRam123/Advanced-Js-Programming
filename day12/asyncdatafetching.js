function* fetchuserdata(userids)
{
    for(const id of userids)
    {
        const response = yield fetch(`api/${id}`)
        yield response.json()
    }
}
function rungenerator(gen)
{
    const iterator = gen([1,2,3])
    function handle(yielded)
    {
        if(yielded.done) return;
        const promise = yielded.value 
        promise.then(data => {
            const next = iterator.next(data)
            handle(next)
        })
    }
    handle(iterator.next())
}