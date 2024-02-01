const Create = () => {
  return ( 
    <div className="create">
      <h2 style={{textAlign: "center"}}>Add a new blog</h2>

      <form>
        <label>
          Blog Title:
          <input type="text" required/>
        </label>

        <label>
          Blog Author:
          <select>
            <option value="Tobi">Tobi</option>
            <option value="AyoOluwa">AyoOluwa</option>
            <option value="Emmanuel">Emmanuel</option>
          </select>
        </label>

        <label>
          Blog Body:
          <textarea></textarea>
        </label>

        <button type="submit">Submit a blog</button>
      </form>
    </div>
   );
}
 
export default Create;