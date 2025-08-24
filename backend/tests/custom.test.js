const request = require("supertest");
const app = require("../server");

jest.mock("../models/CustomExtension", () => {
  let customExtensions = [
    { id: 1, customName: "zip" },
    { id: 2, customName: "rar" },
  ];

  return {
    getAllDatas: jest.fn(async () => customExtensions),
    addData: jest.fn(async (name) => {
      if (customExtensions.find((e) => e.customName === name))
        throw new Error("이미 추가된 확장자입니다.");
      const newItem = { id: customExtensions.length + 1, customName: name };
      customExtensions.push(newItem);
      return newItem;
    }),
    deleteData: jest.fn(async (id) => {
      customExtensions = customExtensions.filter((e) => e.id !== parseInt(id));
    }),
    __reset: () => {
      customExtensions = [
        { id: 1, customName: "zip" },
        { id: 2, customName: "rar" },
      ];
    },
  };
});

const CustomExtension = require("../models/CustomExtension");

describe("커스텀 확장자 API", () => {
  beforeEach(() => {
    CustomExtension.__reset();
  });

  test("GET /custom -> 전체 조회", async () => {
    const res = await request(app).get("/api/custom");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  test("POST /custom -> 추가", async () => {
    const res = await request(app)
      .post("/api/custom")
      .send({ customName: "7z" });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Added Successfully");

    const after = await request(app).get("/api/custom");
    expect(after.body.find((e) => e.customName === "7z")).toBeTruthy();
  });

  test("DELETE /custom/:id -> 삭제", async () => {
    const res = await request(app).delete("/api/custom/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Deleted Successfully");

    const after = await request(app).get("/api/custom");
    expect(after.body.find((e) => e.id === 1)).toBeFalsy();
  });
});
