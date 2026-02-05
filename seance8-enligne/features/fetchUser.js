// fetch user function completed ✅7


export default async function fetchUser(lien){
    const response = await fetch(lien)
    const data = await response.json()
   

    return data.results[0]
}