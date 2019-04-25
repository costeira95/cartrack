/**
 * * fetches the data from an url
 * @param {string} url
 * @return {Promisse<Object>} users
 */
const fetchData = async (url) => {
    const res = await fetch(url);
    return await res.json();
};

export default fetchData; // exports function