import React from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuário'
}

const baseUrl = 'http://localhost:3001/user'
const initState= {
    user: { name:'', email:''},
    list: []
}

export default class UserCrud extends React.Component{

    state = { ...initState }

    /*Limpar formulário*/ 
    clear() {
        this.setState({ user: initState.user})
    }
    save() {
        const user = this.state.user
        
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url,user)
        
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initState.user, list })
        })
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updatefield(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updatefield(e)}
                                placeholder="Digite o nome"
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">E-mail</label>
                            <input type="email" className="form-control"
                                name="email"
                                value={this.state.user.emal}
                                onChange={e => this.updatefield(e)}
                                placeholder="Digite o email"
                                />
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-contend end"> 
                        <button className="btn btn-primary" 
                        onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secundary ml-2" 
                        onClick={e => this.save(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                Cadastro user
            </Main>
        )
    }
}
