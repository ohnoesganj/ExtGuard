import { useEffect, useState } from "react";
import { getFixedExtensions, updateFixedExtensions } from "./api/fixedApi";
import {
  getCustomExtensions,
  addCustomExtensions,
  deleteCustomExtension,
} from "./api/customApi";
import { validateExtension } from "./utils/validators";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [fixedList, setFixedList] = useState([]);
  const [customList, setCustomList] = useState([]);
  const [customName, setCustomName] = useState("");

  useEffect(() => {
    fetchFixed();
    fetchCustom();
  }, []);

  const fetchFixed = async () => {
    const data = await getFixedExtensions();
    setFixedList(data);
  };

  const fetchCustom = async () => {
    const data = await getCustomExtensions();
    setCustomList(data);
  };

  const handleToggle = async (id, checked) => {
    await updateFixedExtensions(id, checked);
    fetchFixed();
  };

  const handleAdd = async () => {
    const validationError = validateExtension(customName);
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "입력 오류",
        text: validationError,
      });
      return;
    }

    if (customList.some((ext) => ext.customName === customName)) {
      Swal.fire({
        icon: "warning",
        title: "경고",
        text: "이미 추가된 확장자입니다.",
      });
      return;
    }

    if (customList.length >= 200) {
      Swal.fire({
        icon: "warning",
        title: "경고",
        text: "최대 200개까지만 추가 가능합니다.",
      });
      return;
    }

    try {
      await addCustomExtensions(customName);
      setCustomName("");
      fetchCustom();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const msg = error.response.data.error;
        if (msg === "Exists Extension Name") {
          Swal.fire({
            icon: "warning",
            title: "경고",
            text: "고정 확장자에 이미 존재하는 확장자입니다.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "서버 오류",
            text: "서버와 통신 중 문제가 발생했습니다.",
          });
        }
      }
    }
  };

  const handleDelete = async (id) => {
    await deleteCustomExtension(id);
    fetchCustom();
  };

  return (
    <div className="container">
      <h1>파일 확장자 차단</h1>
      {/* 고정 확장자 */}
      <div className="section">
        <h3 className="label">고정 확장자</h3>
        <div className="content">
          {fixedList.map((ext) => (
            <label key={ext.id} className="fixed-label">
              <input
                type="checkbox"
                checked={ext.checked === 1}
                onChange={(e) => handleToggle(ext.id, e.target.checked)}
              />
              {ext.name}
            </label>
          ))}
        </div>
      </div>

      {/* 커스텀 확장자 */}
      <div className="section">
        <h3 className="label">커스텀 확장자</h3>
        <div className="content">
          <input
            type="text"
            size="40"
            maxLength="20"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="확장자 입력"
            className="custom-input"
          />
          <button className="add-btn" onClick={handleAdd}>
            + 추가
          </button>
        </div>
      </div>

      {/* 커스텀 확장자 리스트 */}
      <div className="custom-list-wrapper">
        <div className="custom-length-label">{customList.length} / 200</div>
        <div className="custom-list">
          {customList.map((ext) => (
            <span key={ext.id} className="custom-item">
              {ext.customName}
              <button
                className="delete-btn"
                onClick={() => handleDelete(ext.id)}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
