using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPI.Migrations.DynForms
{
    public partial class DynFormsCustom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CustomFormFields",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    field_type = table.Column<string>(nullable: true),
                    value = table.Column<string>(nullable: true),
                    key = table.Column<string>(nullable: true),
                    label = table.Column<string>(nullable: true),
                    required = table.Column<string>(nullable: true),
                    order = table.Column<string>(nullable: true),
                    controlType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomFormFields", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Forms",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forms", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "CustomFormOptions",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    key = table.Column<string>(nullable: true),
                    value = table.Column<string>(nullable: true),
                    CustomFormFieldID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomFormOptions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_CustomFormOptions_CustomFormFields_CustomFormFieldID",
                        column: x => x.CustomFormFieldID,
                        principalTable: "CustomFormFields",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fields",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    FormID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fields", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Fields_Forms_FormID",
                        column: x => x.FormID,
                        principalTable: "Forms",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Values",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    value = table.Column<string>(nullable: true),
                    FormID = table.Column<int>(nullable: true),
                    FieldID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Values", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Values_Fields_FieldID",
                        column: x => x.FieldID,
                        principalTable: "Fields",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Values_Forms_FormID",
                        column: x => x.FormID,
                        principalTable: "Forms",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomFormOptions_CustomFormFieldID",
                table: "CustomFormOptions",
                column: "CustomFormFieldID");

            migrationBuilder.CreateIndex(
                name: "IX_Fields_FormID",
                table: "Fields",
                column: "FormID");

            migrationBuilder.CreateIndex(
                name: "IX_Values_FieldID",
                table: "Values",
                column: "FieldID",
                unique: true,
                filter: "[FieldID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Values_FormID",
                table: "Values",
                column: "FormID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CustomFormOptions");

            migrationBuilder.DropTable(
                name: "Values");

            migrationBuilder.DropTable(
                name: "CustomFormFields");

            migrationBuilder.DropTable(
                name: "Fields");

            migrationBuilder.DropTable(
                name: "Forms");
        }
    }
}
