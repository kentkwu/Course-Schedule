module.exports = {
    // Load mock courses data into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('course', JSON.stringify([
            {
                "_id": {
                    "$oid": "555d5d2b678e98a594675dbc"
                },
                "CRN": "23914",
                "Title": "Naval Professional Lab ",
                "Enrollment": "57 of 150",
                "days": [],
                "time": "from 03:00 pm to 05:00 pm",
                "location": "TBA",
                "instructor": "TBAdavid jeffrey soltesz david j. soltesz ()",
                "restrictions": "None",
                "comments": [],
                "must_college_requirement": "None",
                "must_not_college_requirement": "None",
                "must_level_requirement": "None",
                "must_not_level": "None",
                "must_degree_requirement": "None",
                "must_major_requirement": "None",
                "must_campus_requirement": "None",
                "must_not_campus_requirement": [
                    "university alliance"
                ],
                "prereqs": "None",
                "attributes": "None",
                "student_attr_req": "None"
            },
            {
                "_id": {
                    "$oid": "555d5d2b678e98a594675dbe"
                },
                "CRN": "23857",
                "Title": "Leadership & Pers Dev ",
                "Enrollment": "0 of 1",
                "days": [],
                "time": "No Time Given",
                "location": "TBA",
                "instructor": "TBA",
                "restrictions": "None",
                "comments": "permission of instructor required;",
                "must_college_requirement": "None",
                "must_not_college_requirement": "None",
                "must_level_requirement": "None",
                "must_not_level": "None",
                "must_degree_requirement": "None",
                "must_major_requirement": "None",
                "must_campus_requirement": "None",
                "must_not_campus_requirement": [
                    "university alliance"
                ],
                "prereqs": "None",
                "attributes": "None",
                "student_attr_req": "None"
            },
            {
                "_id": {
                    "$oid": "555d5d2b678e98a594675dc3"
                },
                "CRN": "24792",
                "Title": "Torts ",
                "Enrollment": "0 of 80",
                "days": [],
                "time": "from 08:00 am to 10:00 am",
                "location": "TBA",
                "instructor": "TBA",
                "restrictions": "None",
                "comments": [],
                "must_college_requirement": "None",
                "must_not_college_requirement": "None",
                "must_level_requirement": "None",
                "must_not_level": "None",
                "must_degree_requirement": "None",
                "must_major_requirement": "None",
                "must_campus_requirement": "None",
                "must_not_campus_requirement": [
                    "university alliance"
                ],
                "prereqs": "None",
                "attributes": "None",
                "student_attr_req": "None"
            },
            {
                "_id": {
                    "$oid": "555d5d2b678e98a594675dbf"
                },
                "CRN": "24776",
                "Title": "Civil Procedure ",
                "Enrollment": "0 of 80",
                "days": [],
                "time": "from 10:10 am to 11:25 am",
                "location": "TBA",
                "instructor": "TBA",
                "restrictions": "None",
                "comments": [],
                "must_college_requirement": "None",
                "must_not_college_requirement": "None",
                "must_level_requirement": "None",
                "must_not_level": "None",
                "must_degree_requirement": "None",
                "must_major_requirement": "None",
                "must_campus_requirement": "None",
                "must_not_campus_requirement": [
                    "university alliance"
                ],
                "prereqs": "None",
                "attributes": "None",
                "student_attr_req": "None"
            },
            {
                "_id": {
                    "$oid": "555d5d2b678e98a594675dc4"
                },
                "CRN": "24793",
                "Title": "Torts ",
                "Enrollment": "0 of 80",
                "days": [],
                "time": "from 08:00 am to 10:00 am",
                "location": "TBA",
                "instructor": "TBA",
                "restrictions": "None",
                "comments": [],
                "must_college_requirement": "None",
                "must_not_college_requirement": "None",
                "must_level_requirement": "None",
                "must_not_level": "None",
                "must_degree_requirement": "None",
                "must_major_requirement": "None",
                "must_campus_requirement": "None",
                "must_not_campus_requirement": [
                    "university alliance"
                ],
                "prereqs": "None",
                "attributes": "None",
                "student_attr_req": "None"
            }
        ]));
    }
};
