fetch('https://apifg.vercel.app/easyquestions')
    .then(res => res.json())
    .then (data => console.log(data))