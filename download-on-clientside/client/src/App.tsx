import { FormEvent, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { downloadHelpers } from './helpers/downloadHelpers';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<{ message: string }>()
  const [fileName, setFileName] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    downloadHelpers.httpRequest(
      `http://localhost:5001?file=${fileName}`,
      'get',
    )
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `sample.${fileName}`)

        document.body.appendChild(link)
        link.click()
        link.parentNode?.removeChild(link)

        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.json())
        setIsLoading(false)
      })
      .finally(() => setIsLoading(false))
  };


  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12">
            <header className="App-header">
              <h1 className="display-4 mt-4 mb-4">React File Downloader</h1>
              <p>This is to demonstrate the ability to download a file via an API request and interpret that file to automatically download on the client side.</p>
            </header>

            <main>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">sample.</span>
                  </div>
                  <input disabled={isLoading} onChange={(e) => setFileName(e.target.value)} className="form-control" value={fileName} type="text" name="file" placeholder="File type, ex csv, pdf, png, etc" autoComplete="off" />
                </div>
                {error
                  ? (<div className="form-group">
                    <div className="alert alert-danger"><strong>Error!</strong> {error.message || 'Something went wrong.'}</div>
                  </div>
                  )
                  : null
                }
                <div className="form-group">
                  <button disabled={isLoading} className="btn btn-primary">Download</button>
                </div>
              </form>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}