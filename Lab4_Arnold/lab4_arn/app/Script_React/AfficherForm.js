
function AfficheForm() {
    return (   
        <div className="container-fluid">
        <br/>
            <div className="row">
                <div className="form-group has-search col-12 col-lg-6">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" />
                </div>
                <p className="col-6 col-lg-2 text-center">Trier par:</p>
                <div className="col-6 col-lg-4">
                    <select className="form-select">
                        <option>select</option>
                    </select>
                </div>
            </div>
        </div>   
    );

}

export default AfficheForm;