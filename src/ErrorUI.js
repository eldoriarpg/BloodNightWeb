import React, {useEffect, useState} from 'react';

const ErrorUi = () => {
    const [err, setErr] = useState("");

    return (
        <div>
            {err}
        </div>
    );
};

export default ErrorUi;