
import React from 'react'
import{ Row} from 'react-bootstrap'

function HistoryCard() {
    const [data, setData]= React.useState([])
    const endPoint = '/api/forms'
    React.useEffect(() => {
        fetch(endPoint)
          .then(response => response.json())
          .then(data => setData(data));
      }, [])



    return (
        <div className="container" style={{
            marginTop:'16px',
            background:'#6c757d'
        }}>
            <h1 className="text-center">History</h1>
            <div style={{ paddingTop:'16px'}}>
                <Row sm="3" style={{paddingLeft:'10px'}}>
                {data.map(a=>{
                    if(a.email === localStorage.getItem('email')){
                        return(

                            <div style={{paddingLeft:"50px"}}>
                                <div className="card" style={{width: '18rem', background:'#292b2c'}}>
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Date:</h3>
                                        <p className="text-center">{a.date}</p>
                                        <h4 class="card-title text-center">Summary:</h4>
                                        <ul className="card-text ">
                                            <p>Symptoms: {a.symptoms}</p>
                                            <p>Isolated: {a.isolated}</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    
                        )  
                    }
                })}
                </Row>
            </div>
            {data.map(a=>{
                if(a.email !== localStorage.getItem('email'))
                return(
                    <div className="text-center">
                        <h3 style={{color:'black'}}>You have not submitted any Health Declaration</h3>
                        <a href='/form'>Fill in the Health Declaration Form</a>
                    </div>
                )

            })}
            
        </div>
    )
}

export default HistoryCard

            