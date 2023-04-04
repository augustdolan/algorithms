const example = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];

const expectedOutput = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
];

const example2 =   [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
  ]

const expectedOutput2 = [{ startTime: 1, endTime: 10}];

const mergeRanges = (meetingTimes) => {
    const sortedMeetings = meetingTimes.sort((a, b) => a.startTime - b.startTime);
    const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    if (sortedMeetings[i].startTime <= mergedMeetings[mergedMeetings.length - 1].endTime) {
        mergedMeetings[mergedMeetings.length - 1].endTime = sortedMeetings[i].endTime > mergedMeetings[mergedMeetings.length - 1].endTime ? sortedMeetings[i].endTime : mergedMeetings[mergedMeetings.length - 1].endTime;
    } else {
        mergedMeetings.push(sortedMeetings[i]);
    }
  }

  return mergedMeetings;
};

console.log(mergeRanges(example2));

