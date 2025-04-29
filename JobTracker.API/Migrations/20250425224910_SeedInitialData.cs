using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace JobTracker.API.Migrations
{
    /// <inheritdoc />
    public partial class SeedInitialData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "JobApplications",
                columns: new[] { "Id", "AppliedDate", "CompanyName", "Notes", "Role", "Status" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 4, 20, 0, 0, 0, 0, DateTimeKind.Utc), "Google", "Referred by friend", "Software Engineer", "Applied" },
                    { 2, new DateTime(2024, 4, 18, 0, 0, 0, 0, DateTimeKind.Utc), "Microsoft", "Phone screen done", "Cloud Engineer", "Interviewing" },
                    { 3, new DateTime(2024, 4, 10, 0, 0, 0, 0, DateTimeKind.Utc), "Amazon", "No response", "Backend Developer", "Rejected" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "JobApplications",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "JobApplications",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "JobApplications",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
