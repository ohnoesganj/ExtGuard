const request = require("supertest");
const app = require("../server");

jest.mock("../models/FixedExtension", () => {
  let fixedExtensions = [
    { id: 1, name: "exe", checked: 1 },
    { id: 2, name: "bat", checked: 0 },
  ];

  return {
    getAllDatas: jest.fn(async () => fixedExtensions),
    updateStatus: jest.fn(async (id, checked) => {
      const index = fixedExtensions.findIndex((e) => e.id === parseInt(id));
      if (index === -1) throw new Error("변경할 수 없습니다.");
      fixedExtensions[index].checked = checked ? 1 : 0;
      return fixedExtensions[index];
    }),
    __reset: () => {
      fixedExtensions = [
        { id: 1, name: "exe", checked: 1 },
        { id: 2, name: "bat", checked: 0 },
      ];
    },
  };
});

const FixedExtension = require("../models/FixedExtension");

describe("고정 확장자 API", () => {
  beforeEach(() => {
    FixedExtension.__reset();
  });

  test("GET /fixed -> 전체 조회", async () => {
    const res = await request(app).get("/api/fixed");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].name).toBe("exe");
  });

  test("PATCH /fixed/:id -> 상태 업데이트", async () => {
    const res = await request(app)
      .patch("/api/fixed/2")
      .send({ checked: true });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Updated Successfully");

    const after = await request(app).get("/api/fixed");
    expect(after.body.find((e) => e.id === 2).checked).toBe(1);
  });
});
