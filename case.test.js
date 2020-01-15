import { generateConfig, generateAnotherConfig } from "./case";

test("测试 generateConfig", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  }); // 将第一次运行返回的结果配置作为快照进行存储，如果之后返回的结果与第一次不匹配，测试不通过
});

test("测试 generateAnotherConfig", () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

// 更新快照 命令行数字操作 (单独更新快照 i快捷键 & 统一更新快照 u快捷键)

// 行内快照（需要安装 prettier） 会自动在测试用例内部生成行内快照
test("测试 generateAnotherConfig 函数-行内快照", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
