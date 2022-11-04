function CreateTable (props) {
    return(
        j
        // <div>
        //     <p>Категория: {props.name}</p>
        //     <p> Цена: {props.price}</p>
        //     <div>Ссылка:
        //         <a href={props.url}></a>
        //     </div>
        //     <img src={props.photo} alt=""></img>
        //     <p>Количество на складе: {props.quantity}</p>
        // </div>
    ) 
}

const productsArr = [{name: 'dress', price: 100, url: 'https://elema.by/catalog/platya/plate-zhenskoe-21-2305-21-2305/', photo: 'img/dress.jpeg', quantity: 6},
{name: 'coat', price: 200, url: 'https://elema.by/catalog/zhenskaya-odezhda/palto-zhenskoe-demisezonnoe-1-127321-1/', photo: 'img/coat.jpeg', quantity: 3}];

// const Table = (
//     <div>
//         {productsArr.map(element => {
//             <CreateTable name = {element.name} />
            
//         })};
//     </div>
    
// )
const root = ReactDOM.createRoot(document.getElementById('table'));

root.render(Table);
// ReactDom.render (Table, document.getElementById('table'));