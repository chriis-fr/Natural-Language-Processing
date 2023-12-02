document.querySelector("[name='sentence']").addEventListener("keyup", async (e) => {
    if(!(e.which === 13))
    return;

    const request = await fetch(`/past-tense?${new URLSearchParams({
        sentence: e.target.value
    })}`)

    const pastTense = await request.json();
    console.log(pastTense)
    document.querySelector('#output').innerHTML = pastTense.text

})

