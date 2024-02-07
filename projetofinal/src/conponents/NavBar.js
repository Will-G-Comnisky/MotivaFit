function NavBar(props){
    return(
        <div id="idNav">
        {/* Logout, editar perfil, logo */}
        <div id="idNavImgBackground">
            <img src={props.logo} id="idNavImg" alt="" />
        </div>

        <div id="idFiller"></div>

        <div className="clNavBotaoBackground"> 
            <button className="clNavBotao" >Editar Perfil</button>
        </div>

        <div className="clNavBotaoBackground">
            <button className="clNavBotao" >Logout</button>
        </div>
        




        </div>
    )
}

export default NavBar