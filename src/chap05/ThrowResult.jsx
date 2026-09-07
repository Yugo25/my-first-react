import wrapPromise from './wrapPromise';

const info = getinfo();

export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

function getinfo() {
    return wrapPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Succeeded');
            } else {
                reject('Error');
            }
        }, 2000);
    )});
}