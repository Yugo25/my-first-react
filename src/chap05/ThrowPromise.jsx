let flag = false;

export default function ThrowPromise {
    if (flag) {
        return <p>Shown correctly</p>
    }
    
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flag = true;
            resolve('Success!');
        }, 3000);
    });
}