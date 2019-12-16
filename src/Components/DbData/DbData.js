import React from 'react';

export default function DbData() {
    const [dbData, setDbData] = React.useState([]);

    React.useEffect(() => {
        fetch('/DbData')
            .then(res => res.json())
            .then(data => setDbData(data))
    }, [])

    return (
        <>
            db data {dbData.map(item => <div key={item.googleId}>
                <p>username: {item.username}</p>
                <p>userID: {item.googleId}</p>
            </div>)}
        </>
    )
}