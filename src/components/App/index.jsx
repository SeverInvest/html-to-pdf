import "./style.scss";
import { usePDF, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Act from "../Act";

export default function App() {
// eslint-disable-next-line
  const [instance, setInstance] = usePDF({ document: Act });
  if (instance.loading) return <div>Loading ...</div>;
  if (instance.error) return <div>Ошибка</div>;

  return (
    <div className="container">
      <div className="container__frame">
        <PDFViewer>
          <Act />
        </PDFViewer>
      </div>

      <PDFDownloadLink document={<Act />} fileName="somename.pdf" className="container__link-download">
        {({ blob, url, loading, error }) =>
          loading ? 'Документ загружается...' : 'Экспорт'
        }
      </PDFDownloadLink>

    </div>
  )
}
