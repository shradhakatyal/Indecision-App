const appRoot = document.getElementById('app');


const app = {
    title: 'Indecision App',
    subtitle: 'some subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        renderIndecisionApp();
        e.target.elements.option.value = '';
    }
}
const onRemoveAll = (e) => {
    e.preventDefault();
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    console.log(app.options[randomNum]);
}

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are some options' : 'No options exist yet'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option, i)=> {
                    return (<li key={i}>{option}</li>);
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();