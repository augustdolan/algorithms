/**
 * "Whiteboard"
 * O: Condensed time ranges that omit overlap
 * I: Array of timeObjs w/ startTime and endTime (nums rep 30 min blocks)
 * C: meetings are not in order
 * E: no meeting times === empty array
 * 
 * What counts as an overlap? 
 * When endTime of a meeting is between start & end of another
 * Said another way, when start time is between start and end of another
 * 
 * First pass will be O(n^2) although if inplace could reduce to log
 * Sorting will help, but core logic should be written first
 */


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

const mergeRanges = (meetingTimes) => {
    const sortedMeetings = meetingTimes.sort((a, b) => a.startTime - b.startTime);
    const mergedMeetings = []
    const mergedSortedMeetings = [];

  for (let i = 0; i < sortedMeetings.length; i++) {
    if (mergedMeetings.includes(i)) continue;
    const earliestStart = sortedMeetings[i].startTime;
    let latestFinish = sortedMeetings[i].endTime;
    for (let j = i + 1; j < sortedMeetings.length; j++) {
        if (mergedMeetings.includes(j)) continue;
        if (sortedMeetings[j].startTime >= sortedMeetings[i].startTime && sortedMeetings[j].startTime <= sortedMeetings[i].endTime) {
            latestFinish = sortedMeetings[j].endTime > latestFinish ? sortedMeetings[j].endTime : latestFinish;
            mergedMeetings.push(j);
        }
    }
    mergedSortedMeetings.push({ startTime: earliestStart, endTime: latestFinish });
  }

  return mergedSortedMeetings;
};

/**
 * Problems with solution: 
 * 
 * I didn't account for the fact that by sorting my meeting times, I can init my merged meetings with the first one, and either merge with the last meeting in my merged array, or simply push 
 * the next meeting in. This would've reduced my space consumption as well as improve the legibility of my code.
 */

