
import { Connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {

        Connection.query('Select * from Blogs', (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });

    });
}

export default {
    all
}