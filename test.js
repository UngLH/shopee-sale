const relevantUsers = [
  {
    functionType: "Coordinator",
    receiveUnit: "65b7677ad9ec99dd51707237",
    receivers: [
      {
        userId: "65b7677ad9ec99dd51707239",
        termId: "65b7677ad9ec99dd5170723a",
      },
    ],
    manager: null,
    action: {
      type: "Command",
      state: "Active",
    },
    receiveTimestamp: 1709616360545,
    canFinish: false,
    procedure: {
      type: "Command",
      timestamp: 1709778504688,
    },
  },
  {
    functionType: "Coordinator",
    receiveUnit: "65b7677cd9ec99dd5170726c",
    receivers: [
      {
        userId: "65b7677cd9ec99dd5170726e",
        termId: "65b7677cd9ec99dd5170726f",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Todo",
    },
    receiveTimestamp: 1709616360545,
    canFinish: false,
    procedure: {
      type: "Report",
      timestamp: 1710205539230,
    },
    reports: [
      {
        message: "Đã kết thúc văn bản",
        timestamp: 1710205539230,
      },
    ],
  },
  {
    functionType: "Coordinator",
    receiveUnit: "65b7677dd9ec99dd51707295",
    receivers: [
      {
        userId: "65b76774d9ec99dd51707199",
        termId: "65b7677dd9ec99dd51707298",
      },
    ],
    manager: null,
    action: {
      type: "Command",
      state: "Active",
    },
    receiveTimestamp: 1709616360546,
    canFinish: false,
    procedure: {
      type: "Command",
      timestamp: 1709720874957,
    },
  },
  {
    functionType: "Coordinator",
    receiveUnit: "65b7677cd9ec99dd51707283",
    receivers: [
      {
        userId: "65b7677dd9ec99dd51707285",
        termId: "65b7677dd9ec99dd51707286",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Todo",
    },
    receiveTimestamp: 1709616360546,
    canFinish: false,
    procedure: {
      type: "Report",
      timestamp: 1710120919041,
    },
    reports: [
      {
        message: "Đã nhận được Kế hoạch.",
        timestamp: 1710120919041,
      },
    ],
  },
  {
    functionType: "Director",
    receivers: [
      {
        userId: "65b76774d9ec99dd51707191",
        termId: "65b76775d9ec99dd517071aa",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709616360540,
    canFinish: true,
    procedure: {
      type: "Complete",
      timestamp: 1709868095044,
    },
  },
  {
    functionType: "Host",
    receiveUnit: "65b76778d9ec99dd51707204",
    receivers: [
      {
        userId: "65b76774d9ec99dd51707195",
        termId: "65b76778d9ec99dd51707207",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709616360548,
    canFinish: true,
    procedure: {
      type: "Finish",
      timestamp: 1709867329031,
    },
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65b76773d9ec99dd5170718d",
        termId: "65b76774d9ec99dd517071a5",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709616360540,
    canFinish: false,
    procedure: {
      type: "Read",
      timestamp: 1709868972789,
    },
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65b76774d9ec99dd5170718f",
        termId: "65b76774d9ec99dd517071a8",
      },
    ],
    manager: null,
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709616360540,
    canFinish: false,
    procedure: {
      type: "Complete",
      timestamp: 1709775429265,
    },
  },
  {
    functionType: "Host",
    receivers: [
      {
        userId: "65b7677dd9ec99dd5170729c",
        termId: "65b7677dd9ec99dd5170729d",
      },
    ],
    manager: {
      userId: "65b76774d9ec99dd51707199",
      termId: "65b7677dd9ec99dd51707298",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709720874957,
    canFinish: false,
    procedure: {
      type: "Complete",
      timestamp: 1709774343854,
    },
    reports: [
      {
        message: "Báo cáo đã nhận được VB và nắm được thông tin liên quan.",
        timestamp: 1709774343854,
      },
    ],
  },
  {
    functionType: "Coordinator",
    receivers: [
      {
        userId: "65b7677ed9ec99dd517072a0",
        termId: "65b7677ed9ec99dd517072a1",
      },
    ],
    manager: {
      userId: "65b76774d9ec99dd51707199",
      termId: "65b7677dd9ec99dd51707298",
    },
    action: {
      state: "Active",
      type: "Todo",
    },
    receiveTimestamp: 1709720874957,
    canFinish: false,
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65b7677dd9ec99dd5170729e",
        termId: "65b7677dd9ec99dd5170729f",
      },
    ],
    manager: {
      userId: "65b76774d9ec99dd51707199",
      termId: "65b7677dd9ec99dd51707298",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709720874957,
    canFinish: false,
    procedure: {
      type: "Complete",
      timestamp: 1709721018980,
    },
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65deb7980bc4ac0eb28d86a9",
        termId: "65deb8880bc4ac0eb28d86b3",
      },
    ],
    manager: {
      userId: "65b76774d9ec99dd51707199",
      termId: "65b7677dd9ec99dd51707298",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709720874957,
    canFinish: false,
    procedure: {
      type: "Complete",
      timestamp: 1709795505832,
    },
  },
  {
    functionType: "Host",
    receivers: [
      {
        userId: "65b7677ad9ec99dd51707241",
        termId: "65e5dfab39af65a8f8c0d20e",
      },
    ],
    manager: {
      userId: "65b7677ad9ec99dd51707239",
      termId: "65b7677ad9ec99dd5170723a",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709778504687,
    canFinish: false,
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65b7677ad9ec99dd5170723b",
        termId: "65b7677ad9ec99dd5170723c",
      },
    ],
    manager: {
      userId: "65b7677ad9ec99dd51707239",
      termId: "65b7677ad9ec99dd5170723a",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709778504687,
    canFinish: false,
    procedure: {
      type: "Read",
      timestamp: 1710118520117,
    },
  },
  {
    functionType: "Reference",
    receivers: [
      {
        userId: "65b7677ad9ec99dd51707245",
        termId: "65b7677ad9ec99dd51707246",
      },
    ],
    manager: {
      userId: "65b7677ad9ec99dd51707239",
      termId: "65b7677ad9ec99dd5170723a",
    },
    action: {
      state: "Active",
      type: "Done",
    },
    receiveTimestamp: 1709778504687,
    canFinish: false,
  },
];

function updateParentState(userId, relevantUsers) {
  const user = relevantUsers.find((u) =>
    u.receivers.some((r) => r.userId === userId)
  );
  //   console.log(user);
  if (!user || !user.manager) {
    return; // Không tìm thấy user hoặc không có manager, dừng quá trình
  }

  const manager = relevantUsers.find(
    (u) =>
      user.manager && u.receivers.some((r) => r.termId === user.manager.termId)
  );
  if (!manager) {
    return; // Không tìm thấy manager, dừng quá trình
  }

  // Tìm tất cả children của manager
  const children = relevantUsers.filter(
    (u) => u.manager && u.manager.userId === manager.receivers[0].userId
  );

  // Kiểm tra xem tất cả children có state là "Done" không
  const allChildrenDone = children.every(
    (child) => child.action.state === "Done"
  );

  if (allChildrenDone) {
    // Cập nhật trạng thái của manager nếu tất cả children đã "Done"
    manager.action.state = "Done";

    // Gọi đệ quy để xem xét parent của manager hiện tại
    updateParentState(manager.receivers[0].userId, relevantUsers);
  }
}

// Gọi hàm này sau khi bạn cập nhật action.state của một children thành "Done"
updateParentState("65e5dfab39af65a8f8c0d20e", relevantUsers);

console.log(JSON.stringify(relevantUsers, null, 2));
